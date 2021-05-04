let wrapper = document.querySelector("div");
let front_title = document.getElementById("front-title");
let steps_container = document.getElementById("steps-container");
let buttons = document.querySelectorAll("button");
let p_text = document.querySelectorAll("p");

document.getElementById("Light-button").addEventListener('click',()=>
    change_theme_color("#f4f4f4","#95bc94", "#000000", "#0f5f85", "#ffffff8c", "#a6a6a6", "#000000" )
);

document.getElementById("Dark-button").addEventListener('click',()=>
    change_theme_color("#525252e6","#95bc94", "#eaeaea", "#bfc8cd", "#e5e5e5", "#e3e3e3", "#eaeaea" )
);

document.getElementById("new-step-input").addEventListener('keydown', (e) => {
    if (e.keyCode === 13 && document.getElementById("new-step-input").value !== "") {
        let new_step = create_step_block();
        steps_container.appendChild(new_step);
    }
});

document.getElementById("add-step-button").addEventListener('click', (e) => {
    if (document.getElementById("new-step-input").value !== "") {
        let new_step = create_step_block();
        steps_container.appendChild(new_step);
    }
});



function change_theme_color(wr_col, fr_t_border_col, fr_t_font_col, cont_border_col, bttn_back_col, bttn_border_col, p_text_col ){
    wrapper.style.backgroundColor = wr_col;
    front_title.style.borderColor = fr_t_border_col;
    front_title.style.color = fr_t_font_col;
    steps_container.style.borderColor = cont_border_col;
    buttons.forEach((elem,i,arr) => {
        arr[i].style.backgroundColor = bttn_back_col;
        arr[i].style.borderColor = bttn_border_col;
    });
    p_text.forEach((elem,i,arr) => {
        arr[i].style.color = p_text_col;
    });
}

function create_step_block(){
    let new_step = document.createElement("div");
    let input = document.getElementById("new-step-input");
    let text = input.value;
    input.value = "";
    new_step.innerHTML = "<p>" + text + "</p>";
    let cross = document.createElement("i");
    cross.className = "cross fas fa-times";
    cross.onclick = ()=>{
        let parent = new_step;
        parent.remove();
    }
    new_step.appendChild(cross);
    new_step.className = "step-block";
    new_step.onclick = ()=>{
        new_step.classList.toggle("done");

    }
    return new_step;
}
