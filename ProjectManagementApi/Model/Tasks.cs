namespace ProjectManagementApi.Model
{
    public class Tasks
    {
        public int TasksId { get; set; }       // Primary Key
        public string TasksName { get; set; }
        public string Description { get; set; }
        public int? AssignedToId { get; set; }  // Foreign Key
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Priority { get; set; }
        public int TasksStatusId { get; set; }  // Foreign Key
        public int ProjectId { get; set; }     // Foreign Key

        public virtual User AssignedTo { get; set; }  // Navigation property
        public virtual Project Project { get; set; }   // Navigation property
        public virtual TasksStatus Status { get; set; } // Navigation property
    }
}
