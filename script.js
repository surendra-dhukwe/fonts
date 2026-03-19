const fonts = [
  { name:"Noto Sans Devanagari", css:"'Noto Sans Devanagari'", tag:"Professional Hindi" },
  { name:"Noto Serif Devanagari", css:"'Noto Serif Devanagari'", tag:"Classic Marathi" },
  { name:"Tiro Devanagari Hindi", css:"'Tiro Devanagari Hindi'", tag:"Elegant" },
  { name:"IBM Plex Sans Devanagari", css:"'IBM Plex Sans Devanagari'", tag:"Modern" },
  { name:"Hind", css:"'Hind'", tag:"Clean" },
  { name:"Mukta", css:"'Mukta'", tag:"Rounded" },
  { name:"Kalam", css:"'Kalam'", tag:"Handwritten" },
  { name:"Yatra One", css:"'Yatra One'", tag:"Bold Display" },
  { name:"Tillana", css:"'Tillana'", tag:"Decorative" },
  { name:"Baloo 2", css:"'Baloo 2'", tag:"Friendly" },
  { name:"Rajdhani", css:"'Rajdhani'", tag:"Tech" },
  { name:"Teko", css:"'Teko'", tag:"Poster" },
  { name:"Khand", css:"'Khand'", tag:"Compact" },
  { name:"Gotu", css:"'Gotu'", tag:"Minimal" },
  { name:"Montserrat", css:"'Montserrat'", tag:"Premium" },
  { name:"Playfair Display", css:"'Playfair Display'", tag:"Luxury" },
  { name:"Cinzel", css:"'Cinzel'", tag:"Royal" },
  { name:"Orbitron", css:"'Orbitron'", tag:"Futuristic" },
  { name:"Josefin Sans", css:"'Josefin Sans'", tag:"Stylish" },
  { name:"Poppins", css:"'Poppins'", tag:"UI" },
  { name:"Bebas Neue", css:"'Bebas Neue'", tag:"Bold" },
  { name:"Oswald", css:"'Oswald'", tag:"Headline" },
  { name:"Rubik", css:"'Rubik'", tag:"Modern UI" },
  { name:"DM Sans", css:"'DM Sans'", tag:"Minimal" },
  { name:"Manrope", css:"'Manrope'", tag:"Sharp" },
  { name:"Urbanist", css:"'Urbanist'", tag:"Trendy" },
  { name:"Barlow", css:"'Barlow'", tag:"Balanced" },
  { name:"Barlow Condensed", css:"'Barlow Condensed'", tag:"Narrow" },
  { name:"Archivo", css:"'Archivo'", tag:"Strong" },
  { name:"Exo 2", css:"'Exo 2'", tag:"Future" },
  { name:"Righteous", css:"'Righteous'", tag:"Curvy" },
  { name:"Abril Fatface", css:"'Abril Fatface'", tag:"Fancy" },
  { name:"Cormorant Garamond", css:"'Cormorant Garamond'", tag:"Editorial" },
  { name:"Anton", css:"'Anton'", tag:"Heavy" },
  { name:"Signika", css:"'Signika'", tag:"Readable" },
  { name:"Fjalla One", css:"'Fjalla One'", tag:"Poster" },
  { name:"Quicksand", css:"'Quicksand'", tag:"Soft" },
  { name:"Nunito", css:"'Nunito'", tag:"Rounded UI" },
  { name:"Cabin", css:"'Cabin'", tag:"Clean Sans" },
  { name:"Varela Round", css:"'Varela Round'", tag:"Round" },
  { name:"Asap", css:"'Asap'", tag:"Simple" },
  { name:"Libre Baskerville", css:"'Libre Baskerville'", tag:"Bookish" },
  { name:"PT Sans", css:"'PT Sans'", tag:"Classic Sans" },
  { name:"Ubuntu", css:"'Ubuntu'", tag:"Friendly Tech" },
  { name:"Inconsolata", css:"'Inconsolata'", tag:"Mono" },
  { name:"Amaranth", css:"'Amaranth'", tag:"Stylish Bold" },
  { name:"Chakra Petch", css:"'Chakra Petch'", tag:"Sci-Fi" },
  { name:"Alfa Slab One", css:"'Alfa Slab One'", tag:"Chunky" },
  { name:"Creepster", css:"'Creepster'", tag:"Horror" },
  { name:"Nosifer", css:"'Nosifer'", tag:"Blood" },
  { name:"Lobster", css:"'Lobster'", tag:"Script" },
  { name:"Pacifico", css:"'Pacifico'", tag:"Smooth" },
  { name:"Dancing Script", css:"'Dancing Script'", tag:"Elegant Script" },
  { name:"Great Vibes", css:"'Great Vibes'", tag:"Luxury Script" },
  { name:"Satisfy", css:"'Satisfy'", tag:"Casual Script" },
  { name:"Permanent Marker", css:"'Permanent Marker'", tag:"Marker" },
  { name:"Shadows Into Light", css:"'Shadows Into Light'", tag:"Light Handwriting" },
  { name:"Courgette", css:"'Courgette'", tag:"Rounded Script" },
  { name:"Kaushan Script", css:"'Kaushan Script'", tag:"Bold Script" },
  { name:"Marck Script", css:"'Marck Script'", tag:"Natural Script" },
  { name:"Sacramento", css:"'Sacramento'", tag:"Thin Script" },
  { name:"Yellowtail", css:"'Yellowtail'", tag:"Retro Script" },
  { name:"Handlee", css:"'Handlee'", tag:"Handwritten" },
  { name:"Patrick Hand", css:"'Patrick Hand'", tag:"Friendly Hand" },
  { name:"Gloria Hallelujah", css:"'Gloria Hallelujah'", tag:"Rough Hand" },
  { name:"Caveat", css:"'Caveat'", tag:"Loose Script" },
  { name:"Amatic SC", css:"'Amatic SC'", tag:"Tall Handwritten" },
  { name:"Pathway Gothic One", css:"'Pathway Gothic One'", tag:"Condensed Sans" },
  { name:"Arimo", css:"'Arimo'", tag:"Web Sans" },
  { name:"Merriweather", css:"'Merriweather'", tag:"Readable Serif" },
  { name:"Source Sans 3", css:"'Source Sans 3'", tag:"Source Sans" },
  { name:"Lato", css:"'Lato'", tag:"Balanced Sans" },
  { name:"Open Sans", css:"'Open Sans'", tag:"Popular Sans" },
  { name:"Raleway", css:"'Raleway'", tag:"Elegant Sans" },
  { name:"Work Sans", css:"'Work Sans'", tag:"Modern Work" },
  { name:"Kanit", css:"'Kanit'", tag:"Geometric" },
  { name:"Prompt", css:"'Prompt'", tag:"Neat" },
  { name:"Mulish", css:"'Mulish'", tag:"Simple" },
  { name:"Heebo", css:"'Heebo'", tag:"Bold Clean" },
  { name:"Titillium Web", css:"'Titillium Web'", tag:"Tech Sans" },
  { name:"Yanone Kaffeesatz", css:"'Yanone Kaffeesatz'", tag:"Tall Display" },
  { name:"Questrial", css:"'Questrial'", tag:"Minimal Sans" },
  { name:"Catamaran", css:"'Catamaran'", tag:"Rounded Sans" },
  { name:"Comfortaa", css:"'Comfortaa'", tag:"Rounded Fancy" },
  { name:"Lexend", css:"'Lexend'", tag:"Readable UI" },
  { name:"Encode Sans", css:"'Encode Sans'", tag:"Clear Sans" },
  { name:"Red Hat Display", css:"'Red Hat Display'", tag:"Display" },
  { name:"Space Grotesk", css:"'Space Grotesk'", tag:"Modern Tech" },
  { name:"Outfit", css:"'Outfit'", tag:"UI Modern" },
  { name:"Sora", css:"'Sora'", tag:"Soft Tech" },
  { name:"Syne", css:"'Syne'", tag:"Creative" },
  { name:"Plus Jakarta Sans", css:"'Plus Jakarta Sans'", tag:"Premium UI" },
  { name:"Public Sans", css:"'Public Sans'", tag:"Government Style" },
  { name:"Assistant", css:"'Assistant'", tag:"Simple UI" },
  { name:"Didact Gothic", css:"'Didact Gothic'", tag:"Neutral Sans" },
  { name:"Jost", css:"'Jost'", tag:"Geometric Modern" },
  { name:"Philosopher", css:"'Philosopher'", tag:"Smart Serif" },
  { name:"Prata", css:"'Prata'", tag:"Luxury Serif" },
  { name:"Domine", css:"'Domine'", tag:"Strong Serif" },
  { name:"Zilla Slab", css:"'Zilla Slab'", tag:"Slab Serif" }
];

let selectedFont = fonts[0].css;
let isTransparentText = false;

const canvas = new fabric.Canvas("editorCanvas", {
  preserveObjectStacking: true,
  backgroundColor: "#111827"
});

const inputText = document.getElementById("inputText");
const inputMode = document.getElementById("inputMode");
const outputMode = document.getElementById("outputMode");
const previewOutput = document.getElementById("previewOutput");
const textColor = document.getElementById("textColor");
const textBgColor = document.getElementById("textBgColor");
const fontSize = document.getElementById("fontSize");
const opacityInput = document.getElementById("opacityInput");
const strokeColor = document.getElementById("strokeColor");
const strokeWidth = document.getElementById("strokeWidth");
const textBgOpacity = document.getElementById("textBgOpacity");
const shadowBlur = document.getElementById("shadowBlur");
const shadowColor = document.getElementById("shadowColor");
const charSpacing = document.getElementById("charSpacing");
const lineHeight = document.getElementById("lineHeight");
const canvasBg = document.getElementById("canvasBg");
const shadowX = document.getElementById("shadowX");
const shadowY = document.getElementById("shadowY");
const hiddenVideo = document.getElementById("hiddenVideo");
const mediaStatus = document.getElementById("mediaStatus");
const downloadPreset = document.getElementById("downloadPreset");
const customWidth = document.getElementById("customWidth");
const customHeight = document.getElementById("customHeight");
const mainLayout = document.getElementById("mainLayout");
const toggleMenuBtn = document.getElementById("toggleMenuBtn");

function rgbaFromHex(hex, alpha){
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function isDevanagariText(text){
  return /[\u0900-\u097F]/.test(text);
}

function translitLatinToHindi(text){
  try{
    const result = Sanscript.t(text, "itrans", "devanagari");
    if(result && result !== text) return result;
  }catch(e){}

  const map = {
    "surendra":"सुरेंद्र",
    "mera":"मेरा",
    "naam":"नाम",
    "hai":"है",
    "main":"मैं",
    "mai":"मैं",
    "namaste":"नमस्ते",
    "shubh":"शुभ",
    "holi":"होली",
    "khun":"खून"
  };

  return text.split(/\b/).map(t => map[t.toLowerCase()] || t).join("");
}

function hindiToMarathiStyle(text){
  return text
    .replace(/मेरा नाम/g, "माझं नाव")
    .replace(/मेरा/g, "माझं")
    .replace(/नाम/g, "नाव")
    .replace(/है/g, "आहे")
    .replace(/मैं/g, "मी")
    .replace(/नमस्ते/g, "नमस्कार")
    .replace(/हिंदी/g, "मराठी");
}

function convertTextValue(){
  const raw = inputText.value.trim();

  if(!raw){
    previewOutput.textContent = "सुरेंद्र";
    previewOutput.style.fontFamily = selectedFont;
    return "";
  }

  let mode = inputMode.value;
  if(mode === "auto"){
    mode = isDevanagariText(raw) ? "devanagari" : "latin";
  }

  const hindiText = mode === "latin" ? translitLatinToHindi(raw) : raw;
  const marathiText = hindiToMarathiStyle(hindiText);

  let finalText = raw;
  if(outputMode.value === "hindi") finalText = hindiText;
  else if(outputMode.value === "marathi") finalText = marathiText;
  else finalText = raw;

  previewOutput.textContent = finalText || "सुरेंद्र";
  previewOutput.style.fontFamily = selectedFont;
  previewOutput.style.letterSpacing = (Number(charSpacing.value) / 80) + "px";
  previewOutput.style.lineHeight = lineHeight.value;
  previewOutput.style.color = textColor.value;
  previewOutput.style.background = isTransparentText ? "transparent" : "#08101d";
  return finalText;
}

function getSelectedObject(){
  return canvas.getActiveObject();
}

function buildShadow(){
  return new fabric.Shadow({
    color: shadowColor.value,
    blur: parseInt(shadowBlur.value, 10),
    offsetX: parseInt(shadowX.value, 10),
    offsetY: parseInt(shadowY.value, 10)
  });
}

function getTextBackgroundColor(){
  if(isTransparentText){
    return "rgba(0,0,0,0)";
  }
  return rgbaFromHex(textBgColor.value, parseFloat(textBgOpacity.value));
}

function addTextToCanvas(customText = null){
  const converted = convertTextValue();
  const value = customText || converted || "सुरेंद्र";

  const textbox = new fabric.Textbox(value, {
    left: 70,
    top: 70,
    width: 320,
    fontFamily: selectedFont,
    fontSize: parseInt(fontSize.value, 10),
    fill: textColor.value,
    stroke: strokeColor.value,
    strokeWidth: parseInt(strokeWidth.value, 10),
    textBackgroundColor: getTextBackgroundColor(),
    opacity: parseFloat(opacityInput.value),
    editable: true,
    padding: 10,
    cornerStyle: "circle",
    cornerColor: "#06b6d4",
    borderColor: "#4f46e5",
    transparentCorners: false,
    shadow: buildShadow(),
    charSpacing: parseInt(charSpacing.value, 10),
    lineHeight: parseFloat(lineHeight.value)
  });

  canvas.add(textbox);
  canvas.setActiveObject(textbox);
  canvas.bringToFront(textbox);
  canvas.renderAll();
}

function applyStylesToSelected(){
  const obj = getSelectedObject();
  if(!obj) return;

  if(obj.type === "textbox" || obj.type === "i-text"){
    obj.set({
      fontFamily: selectedFont,
      fontSize: parseInt(fontSize.value, 10),
      fill: textColor.value,
      stroke: strokeColor.value,
      strokeWidth: parseInt(strokeWidth.value, 10),
      opacity: parseFloat(opacityInput.value),
      textBackgroundColor: getTextBackgroundColor(),
      shadow: buildShadow(),
      charSpacing: parseInt(charSpacing.value, 10),
      lineHeight: parseFloat(lineHeight.value)
    });
    canvas.bringToFront(obj);
    canvas.renderAll();
  }
}

function applyBloodStyle(){
  const obj = getSelectedObject();

  textColor.value = "#7a0000";
  textBgColor.value = "#1a0000";
  textBgOpacity.value = "0.18";
  strokeColor.value = "#2b0000";
  strokeWidth.value = "2";
  shadowColor.value = "#3b0000";
  shadowBlur.value = "18";
  shadowX.value = "3";
  shadowY.value = "5";
  charSpacing.value = "180";
  lineHeight.value = "1.7";
  isTransparentText = false;

  const bloodFont = fonts.find(f => f.name === "Nosifer") || fonts.find(f => f.name === "Creepster");
  if(bloodFont){
    selectedFont = bloodFont.css;
  }

  document.querySelectorAll(".font-card").forEach(card => {
    card.classList.remove("active");
    const name = card.querySelector(".font-name");
    if(name && name.textContent.trim() === "Nosifer"){
      card.classList.add("active");
    }
  });

  convertTextValue();

  if(obj && (obj.type === "textbox" || obj.type === "i-text")){
    obj.set({
      fontFamily: selectedFont,
      fill: "#7a0000",
      stroke: "#2b0000",
      strokeWidth: 2,
      textBackgroundColor: rgbaFromHex("#1a0000", 0.18),
      shadow: new fabric.Shadow({
        color: "#3b0000",
        blur: 18,
        offsetX: 3,
        offsetY: 5
      }),
      charSpacing: 180,
      lineHeight: 1.7
    });
    canvas.bringToFront(obj);
    canvas.renderAll();
  }
}

function applyNormalStyle(){
  const obj = getSelectedObject();

  textColor.value = "#ffffff";
  textBgColor.value = "#000000";
  textBgOpacity.value = "0.55";
  strokeColor.value = "#000000";
  strokeWidth.value = "2";
  shadowColor.value = "#000000";
  shadowBlur.value = "10";
  shadowX.value = "2";
  shadowY.value = "2";
  charSpacing.value = "0";
  lineHeight.value = "1.2";
  isTransparentText = false;

  selectedFont = fonts[0].css;

  document.querySelectorAll(".font-card").forEach((card, index) => {
    card.classList.remove("active");
    if(index === 0) card.classList.add("active");
  });

  convertTextValue();

  if(obj && (obj.type === "textbox" || obj.type === "i-text")){
    obj.set({
      fontFamily: selectedFont,
      fill: "#ffffff",
      stroke: "#000000",
      strokeWidth: 2,
      textBackgroundColor: rgbaFromHex("#000000", 0.55),
      shadow: new fabric.Shadow({
        color: "#000000",
        blur: 10,
        offsetX: 2,
        offsetY: 2
      }),
      charSpacing: 0,
      lineHeight: 1.2
    });
    canvas.bringToFront(obj);
    canvas.renderAll();
  }
}

function setTransparentText(){
  isTransparentText = true;
  previewOutput.style.background = "transparent";
  applyStylesToSelected();
}

function setSolidText(){
  isTransparentText = false;
  previewOutput.style.background = "#08101d";
  applyStylesToSelected();
}

function renderFontList(){
  const list = document.getElementById("fontList");
  list.innerHTML = "";

  fonts.forEach((font, index) => {
    const card = document.createElement("div");
    card.className = "font-card" + (index === 0 ? " active" : "");
    card.innerHTML = `
      <div class="font-name">${font.name}</div>
      <div class="font-demo" style="font-family:${font.css};">Surendra</div>
      <div class="font-demo small" style="font-family:${font.css};">सुरेंद्र</div>
      <span class="tag">${font.tag}</span>
    `;

    card.addEventListener("click", () => {
      document.querySelectorAll(".font-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      selectedFont = font.css;
      previewOutput.style.fontFamily = selectedFont;
      applyStylesToSelected();
      convertTextValue();
    });

    list.appendChild(card);
  });
}

function fitImageOnCanvas(img){
  const maxW = canvas.getWidth() * 0.95;
  const maxH = canvas.getHeight() * 0.95;

  if(img.width > maxW) img.scaleToWidth(maxW);
  if((img.height * img.scaleY) > maxH) img.scaleToHeight(maxH);

  img.set({
    left: (canvas.getWidth() - img.getScaledWidth()) / 2,
    top: (canvas.getHeight() - img.getScaledHeight()) / 2
  });
}

function loadImageToCanvas(dataUrl, msg){
  fabric.Image.fromURL(dataUrl, function(img){
    img.set({
      cornerColor: "#06b6d4",
      borderColor: "#4f46e5",
      transparentCorners: false
    });

    fitImageOnCanvas(img);
    canvas.add(img);
    canvas.sendToBack(img);
    bringTextsToFront();
    mediaStatus.textContent = msg;
    canvas.renderAll();
  }, { crossOrigin: "anonymous" });
}

function bringTextsToFront(){
  canvas.getObjects().forEach(obj => {
    if(obj.type === "textbox" || obj.type === "i-text"){
      canvas.bringToFront(obj);
    }
  });
  canvas.renderAll();
}

function syncControlsFromObject(){
  const obj = getSelectedObject();
  if(!obj) return;

  if(obj.type === "textbox" || obj.type === "i-text"){
    fontSize.value = obj.fontSize || 34;
    opacityInput.value = obj.opacity ?? 1;
    textColor.value = obj.fill || "#ffffff";
    strokeColor.value = obj.stroke || "#000000";
    strokeWidth.value = obj.strokeWidth || 2;
    charSpacing.value = obj.charSpacing || 0;
    lineHeight.value = obj.lineHeight || 1.2;
  }
}

function getExportSize(){
  if(downloadPreset.value !== "original"){
    const parts = downloadPreset.value.split("x");
    return {
      width: parseInt(parts[0], 10),
      height: parseInt(parts[1], 10)
    };
  }

  const w = parseInt(customWidth.value, 10);
  const h = parseInt(customHeight.value, 10);

  if(w > 0 && h > 0){
    return { width: w, height: h };
  }

  return { width: canvas.getWidth(), height: canvas.getHeight() };
}

function downloadCanvas(){
  canvas.discardActiveObject();
  canvas.renderAll();

  const size = getExportSize();
  const multiplierX = size.width / canvas.getWidth();
  const multiplierY = size.height / canvas.getHeight();
  const multiplier = Math.min(multiplierX, multiplierY) || 1;

  const dataURL = canvas.toDataURL({
    format: "png",
    quality: 1,
    multiplier: multiplier
  });

  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "font-studio-design.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById("convertBtn").addEventListener("click", convertTextValue);

document.getElementById("addTextBtn").addEventListener("click", () => {
  const text = convertTextValue();
  addTextToCanvas(text || "सुरेंद्र");
});

document.getElementById("addSampleBtn").addEventListener("click", () => addTextToCanvas("सुरेंद्र"));

inputText.addEventListener("input", convertTextValue);
inputMode.addEventListener("change", convertTextValue);
outputMode.addEventListener("change", convertTextValue);

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    inputText.value = chip.dataset.sample;
    convertTextValue();
  });
});

[
  textColor,
  textBgColor,
  fontSize,
  opacityInput,
  strokeColor,
  strokeWidth,
  textBgOpacity,
  shadowBlur,
  shadowColor,
  charSpacing,
  lineHeight,
  shadowX,
  shadowY
].forEach(el => {
  el.addEventListener("input", () => {
    applyStylesToSelected();
    convertTextValue();
  });
});

canvasBg.addEventListener("input", () => {
  canvas.setBackgroundColor(canvasBg.value, canvas.renderAll.bind(canvas));
});

document.getElementById("boldBtn").addEventListener("click", () => {
  const obj = getSelectedObject();
  if(!obj) return;
  obj.set("fontWeight", obj.fontWeight === "bold" ? "normal" : "bold");
  canvas.renderAll();
});

document.getElementById("italicBtn").addEventListener("click", () => {
  const obj = getSelectedObject();
  if(!obj) return;
  obj.set("fontStyle", obj.fontStyle === "italic" ? "normal" : "italic");
  canvas.renderAll();
});

document.getElementById("underlineBtn").addEventListener("click", () => {
  const obj = getSelectedObject();
  if(!obj) return;
  obj.set("underline", !obj.underline);
  canvas.renderAll();
});

document.getElementById("bloodStyleBtn").addEventListener("click", applyBloodStyle);
document.getElementById("normalStyleBtn").addEventListener("click", applyNormalStyle);
document.getElementById("transparentTextBtn").addEventListener("click", setTransparentText);
document.getElementById("solidTextBtn").addEventListener("click", setSolidText);

document.getElementById("leftAlignBtn").addEventListener("click", () => {
  const obj = getSelectedObject();
  if(!obj) return;
  obj.set("textAlign", "left");
  canvas.renderAll();
});

document.getElementById("centerAlignBtn").addEventListener("click", () => {
  const obj = getSelectedObject();
  if(!obj) return;
  obj.set("textAlign", "center");
  canvas.renderAll();
});

document.getElementById("rightAlignBtn").addEventListener("click", () => {
  const obj = getSelectedObject();
  if(!obj) return;
  obj.set("textAlign", "right");
  canvas.renderAll();
});

document.getElementById("bringFrontBtn").addEventListener("click", () => {
  const obj = getSelectedObject();
  if(!obj) return;
  canvas.bringToFront(obj);
  canvas.renderAll();
});

document.getElementById("sendBackBtn").addEventListener("click", () => {
  const obj = getSelectedObject();
  if(!obj) return;
  canvas.sendToBack(obj);
  bringTextsToFront();
  canvas.renderAll();
});

document.getElementById("duplicateBtn").addEventListener("click", () => {
  const obj = getSelectedObject();
  if(!obj) return;

  obj.clone(clone => {
    clone.set({
      left: (obj.left || 0) + 20,
      top: (obj.top || 0) + 20
    });
    canvas.add(clone);
    canvas.setActiveObject(clone);
    if(clone.type === "textbox" || clone.type === "i-text"){
      canvas.bringToFront(clone);
    }
    canvas.renderAll();
  });
});

document.getElementById("deleteSelectedBtn").addEventListener("click", () => {
  const obj = getSelectedObject();
  if(!obj) return;
  canvas.remove(obj);
  canvas.renderAll();
});

document.getElementById("clearCanvasBtn").addEventListener("click", () => {
  canvas.clear();
  canvas.setBackgroundColor(canvasBg.value, canvas.renderAll.bind(canvas));
  mediaStatus.textContent = "Canvas cleared.";
});

document.getElementById("galleryImageBtn").addEventListener("click", () => {
  document.getElementById("imageUpload").click();
});

document.getElementById("cameraBtn").addEventListener("click", () => {
  document.getElementById("cameraUpload").click();
});

document.getElementById("videoBtn").addEventListener("click", () => {
  document.getElementById("videoUpload").click();
});

document.getElementById("imageUpload").addEventListener("change", function(e){
  const file = e.target.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = ev => loadImageToCanvas(ev.target.result, "Gallery image loaded.");
  reader.readAsDataURL(file);
});

document.getElementById("cameraUpload").addEventListener("change", function(e){
  const file = e.target.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = ev => loadImageToCanvas(ev.target.result, "Camera image loaded.");
  reader.readAsDataURL(file);
});

document.getElementById("videoUpload").addEventListener("change", function(e){
  const file = e.target.files[0];
  if(!file) return;

  const url = URL.createObjectURL(file);
  hiddenVideo.src = url;
  hiddenVideo.load();
  mediaStatus.textContent = "Video loaded. Play ya pause karke Add From Video dabao.";
});

document.getElementById("captureFrameBtn").addEventListener("click", () => {
  if(!hiddenVideo.src){
    alert("Pehle video select karo.");
    return;
  }

  const w = hiddenVideo.videoWidth || 640;
  const h = hiddenVideo.videoHeight || 360;

  const temp = document.createElement("canvas");
  temp.width = w;
  temp.height = h;

  const ctx = temp.getContext("2d");
  ctx.drawImage(hiddenVideo, 0, 0, w, h);

  loadImageToCanvas(temp.toDataURL("image/png"), "Video frame added to canvas.");
});

document.getElementById("downloadBtn").addEventListener("click", downloadCanvas);
document.getElementById("downloadBtnTop").addEventListener("click", downloadCanvas);

downloadPreset.addEventListener("change", () => {
  if(downloadPreset.value === "original") return;
  const [w, h] = downloadPreset.value.split("x");
  customWidth.value = w;
  customHeight.value = h;
});

toggleMenuBtn.addEventListener("click", () => {
  mainLayout.classList.toggle("menu-hidden");
  toggleMenuBtn.textContent = mainLayout.classList.contains("menu-hidden") ? "Show Menu" : "Hide Menu";
  setTimeout(() => {
    canvas.calcOffset();
    canvas.renderAll();
  }, 350);
});

canvas.on("selection:created", syncControlsFromObject);
canvas.on("selection:updated", syncControlsFromObject);

renderFontList();
convertTextValue();
canvas.setBackgroundColor("#111827", canvas.renderAll.bind(canvas));
addTextToCanvas("सुरेंद्र");