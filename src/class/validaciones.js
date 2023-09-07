export class Validaciones {
    constructor() { }

    static validarImagen(file) {
        var resultado = false;
        const maxSizeInBytes = 12582936; // Tamaño máximo permitido en bytes (1 MB)
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i; // Extensiones permitidas
        if (file == undefined) {
            resultado = false;
        } else if (file.size > maxSizeInBytes) {
            resultado = false;
        } else if (!allowedExtensions.test(file.name)) {
            resultado = false;
        } else if (file && file.type.includes('image')) {
            resultado = true;
        }else {
            resultado = false;
        }
        return resultado;
    }
    static validarTexto(texto) {
        var resultado = false;
        for (var x = 0; x < texto.length; x++) {
            var c = texto.charAt(x);

            if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
                resultado = true;
                //System.out.println("El carácter es vocal o consoante no acentuado");
            }
            else if ((c == 'á') || (c == 'é') || (c == 'í') || (c == 'ó') || (c == 'ú')) {
                resultado = true;
                //System.out.println("El carácter es vocal acentuada");
            }
            else if ((c == 'Á') || (c == 'É') || (c == 'Í') || (c == 'Ó') || (c == 'Ú')) {
                resultado = true;
                //System.out.println("El carácter es vocal acentuada");
            }
            else if (c == ' ') {
                resultado = true;
                //System.out.println("El carácter es un espacio");
            }
            else if ((c == ',')) {
                resultado = true;
                //System.out.println("El carácter es un signo de puntuación");
            }
            else {
                resultado = false;
                //System.out.println("El carácter es un número o símbolo no reconocido");
            }
        }
        return resultado;
    }

    static validarNumero(num) {
        var numeroRegex = /^\d+$/; // Expresión regular para dígitos enteros positivos
        if (numeroRegex.test(num)) {
            // El valor es un número válido
            return true;
        } else if (!isNaN(num)) {
            // El valor es un número válido
            return true;
        } else {
            // El valor no es un número válido
            return false;
        }
    }
}
