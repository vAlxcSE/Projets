variable "movies_name" {
    type = string
    description = "movies.txt"
    default = ""
}



resource "null_resource" "exo1" {
    provisioner "local-exec" {
        command ="echo '${var.movies_name}' >> ${var.film_name}"
    }
}

output "fichier" {
    value = "Fichier crée"
}