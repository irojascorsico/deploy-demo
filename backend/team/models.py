from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=100) 
    perfil = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} - {self.perfil}"

   