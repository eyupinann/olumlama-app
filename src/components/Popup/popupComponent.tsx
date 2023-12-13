import {useState} from "react";

function PopupComponent() {
  const [popup, setPopup] = useState(false)

  const clickPopup = () => {
    setPopup(!popup)
  }


  return (
    <div >
      <button className={'btn_click'} onClick={clickPopup} >Olumlama Nedir?</button>
      {popup && (
          <div className={'popup'}>
            <div className={'popup__content'}>
              <div className={'box'}>
                <h1 className={'popup__title'}>Olumlama Nedir?</h1>
                <button className={'popup__close'} onClick={clickPopup} >X</button>
                <hr/>
                <p className={'popup__text'}>Kullandığımız her bir sözcük, evrene verilmiş bir mesaj gibidir. Çünkü cümlelerimiz, duygu ve düşüncelerimizin sesle ifade edilmiş biçimidir. Mesela; her şeyden şikayet eden, hep mutsuz olan insanlara bakarsanız o kronik mutsuzların sürekli olumsuz cümleler kullandığını, hep en kötüye odaklandığını ve başlarına da hep mutsuz olunacak şeyler geldiğini rahatlıkla görebilirsiniz. Olumlama gerçekleşmesi istenen bir şeyin gerçekleştiğine kalpten inanarak, bilinçaltında o pozitif imgeyi yaratmaktır. Olumlama cümlesini belirli bir süre boyunca alçak ya da yüksek sesle kullanmaktır.</p>
                <hr/>
                <button className={'popup__close2'} onClick={clickPopup} >Kapat</button>
              </div>
            </div>
          </div>
      )}
    </div>
  );
}

export default PopupComponent;
