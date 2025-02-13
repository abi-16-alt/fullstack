import React, { useState } from 'react'

const Setting = () => {
    const[theme,setTheme]=useState("Light");
    const[language,setLanguage]=useState("English");

  return (
    <div>
        <h1>Theme:{theme}</h1>
        <button onClick={()=>setTheme(theme==="Light"?"Dark":"Light")}>Toggle Theme</button>
        <h2>Language:{language}</h2>
        <button onClick={()=>setLanguage(language==="English"?"Spanish":"English")}>Toggle Language</button>
    </div>
  );
};

export default Setting;