#!/bin/bash

echo ""

# Mensaje
echo "Leyendo líneas de archivos..."

echo ""

# Iterar sobre los archivos en el directorio actual y sobre los archivos .txt
for archivo in *.txt; do
  # Verificar el archivo
  if [ -f "$archivo" ]; then
    # Muestra el nombre del archivo
    echo "Archivo: $archivo"
    # Mostrar el número de líneas del archivo utilizando el comando wc y echo
    lineas=$(wc -l < "$archivo")
    echo "Número de líneas: $lineas"
  fi
  echo ""
 done

# Mensaje
echo "Lectura de archivos completa."