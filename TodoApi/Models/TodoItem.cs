using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApi.Models
{
    public class TodoItem
    {
        [Key]
        public int Id { get; set; }

        [Column("title")]
        public string Title { get; set; } = string.Empty;
        
        [Column("is_complete")]
        public bool IsComplete { get; set; }

        [Column("user_id")]
        public Guid UserId { get; set; } = Guid.NewGuid(); // Supabase auth.uid()
    }
}
