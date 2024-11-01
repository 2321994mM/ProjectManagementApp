﻿namespace ProjectManagementApi.Model
{
    public class Project
    {
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal Budget { get; set; }
        public int OwnerId { get; set; }
        public string Status { get; set; } // Consider using an enum

        public virtual User Owner { get; set; }
        public virtual ICollection<Tasks> Tasks { get; set; }
    }
}