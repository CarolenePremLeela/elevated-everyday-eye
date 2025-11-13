using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("SupabaseDb")));

// Add services to the container.
builder.Services.AddControllers();
var jwtSecret = builder.Configuration["Supabase:JwtSecret"]; // store in appsettings.json

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = "https://vwbylpercpyrvyjmsnje.supabase.co/auth/v1";
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = "https://vwbylpercpyrvyjmsnje.supabase.co/auth/v1",
            ValidateAudience = true,
            ValidAudience = "authenticated",
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes("f4S5XvcfxLCU+nBYf97xzoYKNuoq0L6JLE+Pa7hWB5X/4kEhiCWPpb5JTCnQJWDX9ZCzDrwXU1gADQpvHqYpfw==")
            )
        };
        // Debug logging
        options.Events = new JwtBearerEvents
        {
            OnAuthenticationFailed = context =>
            {
                Console.WriteLine("Auth failed: " + context.Exception.Message);
                return Task.CompletedTask;
            },
            OnTokenValidated = context =>
            {
                var name = context.Principal?.Identity?.Name ?? "<unknown>";
                Console.WriteLine("Token validated for: " + name);
                return Task.CompletedTask;
            }
        };
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Optional: disable HTTPS redirection if you're testing locally
//app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
