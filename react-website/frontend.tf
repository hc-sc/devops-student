variable dnet_name {
  type        = string
  default     = ""
  description = "docker network name"
}

# Pulls the image
resource "docker_image" "client" {
  name = "react"

  build {
    path = "./react-website"
    dockerfile = "${terraform.workspace == "production" ? "Dockerfile.prod" : "Dockerfile"}"
  }
}

# Create a container
resource "docker_container" "client" {
  image = docker_image.client.image_id
  name  = "react_cont"


  networks_advanced {
   name = var.dnet_name
  }

  mounts {
    source = "${path.cwd}/react-website/public/themes-dist"
    target = "${terraform.workspace == "production" ? "/usr/share/nginx/html/themes-dist" : "/home/app/public/themes-dist"}"
    type = "bind"
  }
  mounts {
    source = "${path.cwd}/react-website/public/wet-boew-dist"
    target = "${terraform.workspace == "production" ? "/usr/share/nginx/html/wet-boew-dist" : "/home/app/public/wet-boew-dist"}"
    type = "bind"
  }
}

output "out" {
  value       = {}
  depends_on  = [docker_container.client]
}
