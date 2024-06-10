variable "film" {
    type = string
    description = "test"
    default = "Scarface"
}

variable "film_name" {
    type = string
    description = "test"
    default = "film.txt"
}

resource "null_resource" "exo1" {
    provisioner "local-exec" {
        command ="echo '${var.film}' >> ${var.film_name}"
    }
}