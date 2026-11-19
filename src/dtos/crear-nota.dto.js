export class CrearNotaDTO {
    constructor (body) {
        this.titulo = body.titulo.trim();
        this.contenido = body.contenido.trim();
        this.categoria = body.categoria;
    }
}