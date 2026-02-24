const database = {
    p1: {
        title: "Proyectos Audiovisuales & VFX",
        content: `
            <video controls>
                <source src="assets/Practica3.mp4" type="video/mp4">
            </video>
            
            <video controls>
                <source src="assets/Practica4.mp4" type="video/mp4">
            </video>
            <video controls>
                <source src="assets/Practica5.mp4" type="video/mp4">
            </video>
            <video controls>
                <source src="assets/Practica6.mp4" type="video/mp4">
            </video>
            <video controls>
                <source src="assets/Practica7.mp4" type="video/mp4">
            </video>
        `
    },
    p2: {
        title: "Modelado 3D ",
        content: `
            
            <model-viewer 
                src="assets/prueba.glb" 
                alt="Un modelo 3D de Beatriz"
                auto-rotate
                environment-image="neutral"
                camera-controls 
                shadow-intensity="1" 
                camera-orbit="45deg 75deg 105%"
                touch-action="pan-y">
            </model-viewer>

            <img src="assets/Practica2.png" alt="Render 2">
            <img src="assets/MAS5.png" alt="Render 2">
            <img src="assets/Untitled.png" alt="Render 1">
            <img src="assets/Untitled2.png" alt="Render 2">
            <img src="assets/Untitled3.png" alt="Render 3">
            <img src="assets/SALON_5.png" alt="Render 4">
        `
    }
};

function showProject(id) {
    const data = database[id];
    if (!data) return;

    document.getElementById('p-title').innerText = data.title;
    document.getElementById('p-content').innerHTML = data.content;

    document.getElementById('home-view').style.display = 'none';
    document.getElementById('project-view').style.display = 'block';
    window.scrollTo(0, 0);
}

function showHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('project-view').style.display = 'none';
    window.scrollTo(0, 0);
}