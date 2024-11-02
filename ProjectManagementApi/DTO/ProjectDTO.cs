﻿namespace ProjectManagementApi.DTO
{
    public class ProjectDTO
    {

        public int ProjectId { get; set; }

        public string ProjectName { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal Budget { get; set; }
        public int OwnerId { get; set; }
        public string Status { get; set; }
    }
}
