import {useEffect, useState} from "react";

function TextsComponent() {
    const [text, setText] = useState('')


    useEffect(() => {
        if (!text) {
            fetch('https://node-blog-ms5e.onrender.com/text/random')
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.texts[0].title)
                    setText(data.texts[0].title)
                })
        }
    }, []);

    const clickAPI = () => {
        fetch('https://node-blog-ms5e.onrender.com/text/random')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.texts[0].title)
                setText(data.texts[0].title)
            })
    }

  return (
    <div>
        <div className={'texts'}>
            <h4>{text}</h4>
        </div>

        <button className={'btn_click_change'} onClick={clickAPI} >Değiştir</button>
    </div>
  );
}

export default TextsComponent;
