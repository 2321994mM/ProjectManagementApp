using Microsoft.EntityFrameworkCore;
using ProjectManagementApi.Model;

namespace ProjectManagementApi.Data
{
    using Microsoft.EntityFrameworkCore;

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
        //public DbSet<Tasks> Tasks { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Tasks> Tasks { get; set; }
        public DbSet<TasksStatus> TaskStatuses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed UserRoles
            modelBuilder.Entity<UserRole>().HasData(
                new UserRole { UserRoleId = 1, RoleName = "Manager" },
                new UserRole { UserRoleId = 2, RoleName = "Employee" }
            );

            // Seed TaskStatuses
            modelBuilder.Entity<TasksStatus>().HasData(
                new TasksStatus { TasksStatusId = 1, Status = "Not Started" },
                new TasksStatus { TasksStatusId = 2, Status = "In Progress" },
                new TasksStatus { TasksStatusId = 3, Status = "Completed" }
            );

            // Seed Users
            modelBuilder.Entity<User>().HasData(
                new User { UserId = 1,PasswordHash="ssss", Username = "Alice", RoleId = 1 }, // Manager
                new User { UserId = 2,PasswordHash="sss" ,Username = "Bob", RoleId = 2 }    // Employee
            );

            // Seed Projects with Status
            modelBuilder.Entity<Project>().HasData(
                new Project { ProjectId = 1, ProjectName = "Project A", Description = "Description A", StartDate = DateTime.Now, Budget = 1000m, OwnerId = 1, Status = "Active" },
                new Project { ProjectId = 2, ProjectName = "Project B", Description = "Description B", StartDate = DateTime.Now, Budget = 2000m, OwnerId = 1, Status = "Active" }
            );

            ////// Seed Tasks
            modelBuilder.Entity<Tasks>().HasData(
                new Tasks { TasksId = 1, TasksName = "Task 1", Description = "Task 1 Description", AssignedToId = null, StartDate = DateTime.Now, TasksStatusId = 1, ProjectId = 1, Priority = "High" },
                new Tasks { TasksId = 2, TasksName = "Task 2", Description = "Task 2 Description", AssignedToId = 2, StartDate = DateTime.Now, TasksStatusId = 2, ProjectId = 2, Priority = "Medium" }
            );

            modelBuilder.Entity<Project>()
     .HasKey(p => p.ProjectId);

            modelBuilder.Entity<User>()
                .HasKey(u => u.UserId);

            modelBuilder.Entity<TasksStatus>()
                .HasKey(ts => ts.TasksStatusId);

            modelBuilder.Entity<Tasks>()
                .HasKey(t => t.TasksId);

            // Define foreign key relationships
            modelBuilder.Entity<Tasks>()
                .HasOne(t => t.Project) // Each Task has one Project
                .WithMany(p => p.Tasks) // Each Project has many Tasks
                .HasForeignKey(t => t.ProjectId); // FK property

            modelBuilder.Entity<Tasks>()
                .HasOne(t => t.AssignedTo) // Each Task can be assigned to one User
                .WithMany() // No navigation property back to Tasks in User
                .HasForeignKey(t => t.AssignedToId) // FK property
                .OnDelete(DeleteBehavior.Restrict); // Specify delete behavior if needed

            modelBuilder.Entity<Tasks>()
                .HasOne(t => t.Status) // Each Task has one Status
                .WithMany() // No navigation property back to TasksStatus
                .HasForeignKey(t => t.TasksStatusId); // FK property
        }
    }


}
