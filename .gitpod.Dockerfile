FROM gitpod/workspace-full

# Install MySQL
RUN sudo apt-get update && sudo apt-get install -y mysql-server

# Expose MySQL port
EXPOSE 3306
