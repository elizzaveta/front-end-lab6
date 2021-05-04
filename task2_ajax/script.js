//

class AJAX{
    get(url, handler){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url , true);
        xhr.send();
        xhr.onload = () => {
            if(xhr.status == 200) handler(xhr.responseText);
            else console.log("Status code is not 200")
        }
    }
    post(url, body){
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url , true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = () => {
            if (xhr.readyState != XMLHttpRequest.DONE) return;
            if (xhr.status == 200) {
                console.log("yes")
            } else {
                console.log(`Error! ${xhr.status}: ${xhr.statusText}`);
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
})

let body = {
    "id":"5",
    "name": "pink color palette",
    "first": "#ff00b7",
    "second": "#d61ca1",
    "third": "#962676",
    "fourth": "#693059"
};

let body2 = 'name=pink color palette&first=#ff00b7&second=#d61ca1&third=#962676&fourth=#693059';

ajax.post('https://my-json-server.typicode.com/elizzaveta/front-end-lab6/colors',body)


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