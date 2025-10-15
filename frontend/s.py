class Vehiculo:
    def __init__(self, marca, modelo, velocidad_maxima):
        self.marca = marca
        self.modelo = modelo
        self.velocidad_maxima = velocidad_maxima
        self.velocidad_actual = 0
    
    def acelerar(self, incremento):
        nueva_velocidad = self.velocidad_actual + incremento
        if nueva_velocidad > self.velocidad_maxima:
            self.velocidad_actual = self.velocidad_maxima
        else:
            self.velocidad_actual = nueva_velocidad
    
    def frenar(self, decremento):
        self.velocidad_actual = max(0, self.velocidad_actual - decremento)


mi_auto = Vehiculo("Toyota", "Corolla", 180)
mi_auto.velocidad_actual = 200  
print(mi_auto.velocidad_actual)
