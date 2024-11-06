# Docker Intro

---

## What is Docker?
![shipping container](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg/1920px-MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg)

Docker is a platform that allows for development and deployment of software in packages called *containers*.

---

### Docker containers

- Containers are:
    - **Isolated:** They do not interact with your local filesystem/OS or other containers (unless we configure them to do so)
    - **Ephemeral:** They can be deleted (& recreated) easily without worry
    - **Lightweight:** They are single-purpose and contain only what they need for that purpose
    - **Reproducible:** We can rebuild the same container over & over with a single command

---

### How does Docker work?
#### Part 1: Your Computer

- In order to understand Docker, we should first discuss how our computers work to begin with.
- Your computer has physical hardware, an OS, and a kernel that interfaces between the two, which are all tightly coupled.
- When we build & deploy apps with this environment, we are limited to the performance of our machine and the libraries that are compatible with it.

---

### How does Docker work?
#### Part 2: Why not use a VM?

- A VM has an OS that is *decoupled* from your computer's hardware. With VMs, can have multiple OSs running on a computer.
- A VM has a kernel & hypervisor. The kernel interfaces between the hardware and the OS. The hypervisor creates & runs a VM.
- A VM is heavy - we often don't need an entirely separate kernel & hypervisor just for the purposes of deploying an application.


---

### VM Visualization

<img src="https://k21academy.com/wp-content/uploads/2020/06/Virtual_Machine_Architecture.png" />



---

### How does Docker work?
#### Part 3: Docker containers

- A Docker container is like a mini-VM that is hardware agnostic - it doesn't care about the host OS.
- It is lightweight - it consists only of a small Linux distribution and necessary libraries & resources. It does not have its own kernel or hypervisor.
- This makes it much more scalable and allows us to run many more containers on one machine than VMs.


---

### Docker Visualization

<img src="https://k21academy.com/wp-content/uploads/2020/06/output-onlinepngtools-16.png" />



---

### Virtual Machine vs Docker

<img src="https://k21academy.com/wp-content/uploads/2020/05/2020_05_13_12_19_07_PowerPoint_Slide_Show_Azure_AZ104_M01_Compute_ed1_-1024x467.png" />


---

### Cool... but why are we learning about Docker?
- We can easily scale an application using a cluster of containers on one or more machines
- We can easily share our application with others for testing & development
    - We can build a template for our application called an *image*
    - We can automate the process of building & deploying that image with *docker compose*
- We can run the same application on *any* machine without worrying about performance or incompatibilites
