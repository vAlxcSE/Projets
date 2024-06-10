variable "movie_name" {
    type = map(string)
    description = "Scarface"
    default = {
        luke  = "jedi"
        yoda  = "jedi"
        darth = "sith"
  }
}


resource "null_resource" "exo1" {
    triggers = {
        test = var.movie_name
    }   
    provisioner "local-exec" {
        command ="echo '${var.movie_name}' >> film.txt"
    }
}

output "fichier" {
    value = "Exo fini"
}