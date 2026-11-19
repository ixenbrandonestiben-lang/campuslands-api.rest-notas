export class ActualizarNotaDTO {
  constructor(body) {
    if (body.titulo !== undefined) {
      this.titulo = body.titulo.trim();
    }
    if (body.contenido !== undefined) {
      this.contenido = body.contenido.trim();
    }
    if (body.categoria !== undefined) {
      this.categoria = body.categoria;
    }
  }
}