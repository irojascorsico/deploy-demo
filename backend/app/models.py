from django.db import models
from django.core.validators import RegexValidator

class Users(models.Model):
    name = models.CharField(
        max_length=100,
        help_text="Nombre completo del usuario."
    )
    email = models.EmailField(
    help_text="Correo electrónico único."
    )
    role = models.CharField(
        max_length=10,
        choices=[('admin', 'Administrador'), ('editor', 'Editor'),
                 ('cliente', 'Cliente')],
        default='cliente',
        help_text="Rol del usuario."
    )

    def __str__(self):
        return f"{self.name} ({self.role})"