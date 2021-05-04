class AJAX{
    get(url, handler){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url , true);
        xhr.send();
        xhr.onload = () => {
            if(xhr.status == 200) handler(xhr.responseText);
            else console.log(`GET: Error! ${xhr.status}: ${xhr.statusText}`)
        }
    }
    post(url, body){
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url , true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = () => {
            if (xhr.status == 201) {
                console.log("POSTed successfully")
            } else {
                console.log(`POST: Error! ${xhr.status}: ${xhr.statusText}`);
            }
        };
        xhr.send(JSON.stringify(body));
    }
}

let ajax = new AJAX();
ajax.get('https://my-json-server.typicode.com/elizzaveta/front-end-lab6/colors', function (response){
    let json = JSON.parse(response);
    console.log(json[0].name);
    json.forEach((elem)=>add_color_block(elem));
    console.log("response text: "+ response);
    console.log("response json: "+json);
})

function add_color_block(color_json){
    let block = document.createElement("div");
    block.className = "color-block";
    block.innerHTML = ` <p>${color_json.name}</p>
                        <div class="color-container">
                            <div style="background: ${color_json.first}" class="color"></div>
                            <div style="background: ${color_json.second}" class="color c2"></div>
                            <div style="background: ${color_json.third}" class="color c3"></div>
                            <div style="background: ${color_json.fourth}" class="color c4"></div>
                        </div>`;

    document.body.appendChild(block);
}

let body = {
    "id":"5",
    "name": "pink color palette",
    "first": "#ff00b7",
    "second": "#d61ca1",
    "third": "#962676",
    "fourth": "#693059"
};

ajax.post('https://my-json-server.typicode.com/elizzaveta/front-end-lab6/colors',body)

