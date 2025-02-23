let decors = document.querySelectorAll('.page_decor')
document.onmousemove = e => {
    let x = e.clientX / window.innerWidth
    let y = e.clientY / window.innerHeight
    decors.forEach(decor => {
        decor.style.transform = `translate(-${x * 70}px, -${y * 70}px)`
    })
}
