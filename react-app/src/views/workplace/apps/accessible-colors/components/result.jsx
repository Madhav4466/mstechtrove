import ColorUtils from "../scripts/color-utils";
import ColorSampleCard from "./color-sample-card";
import ColorSlider from "./color-slider";
import InfoMessage from "./info-message";

export default function Result({ bgColor, fgColor, colorPallete, enhanceColors, onGenerate, currentBGColor, currentFGColor, fgSliderValue, bgSliderValue, handleBGSliderChange, handleFGSliderChange}) {

    const handleSwitch = (value) => {
        if(onGenerate)
            onGenerate(value);
    }

    const getContrast = (fgColor, bgColor) => {
        return ColorUtils.getContrastRatio(fgColor, bgColor);
    }

    const convertHexToRGBArr = (hexColor) => {
        return ColorUtils.convertHexToRgb(hexColor).replace("rgb(", "").replace(")", "").split(",");
    }
    
    const handleOutputAndRenderResult = () => {
        if (colorPallete.foreground.length === 0 && colorPallete.background.length === 0) 
            return <InfoMessage msg="Accessible colors either not possible or the given colors are already have a good contrast ratio." type={"error"}/>
        else if (enhanceColors === "foreground" && colorPallete.foreground.length === 0) {
            if(colorPallete.background.length > 0){
                return <InfoMessage msg="Cannot generate foreground color with this combination." type={"info"} generateButton="Switch to Background" onGenerate={() => handleSwitch("background")} />
            }
            else{
                return <InfoMessage msg="Accessible colors either not possible or the given colors are already have a good contrast ratio." type={"error"} />
            }
        }
        else if (enhanceColors === "background" && colorPallete.background.length === 0) {
            if(colorPallete.foreground.length > 0) {
                return <InfoMessage msg="Cannot generate background color with this combination." type={"info"} generateButton="Switch to Foreground" onGenerate={() => handleSwitch("foreground")} />
            } 
            else{
                return <InfoMessage msg="Accessible colors either not possible or the given colors are already have a good contrast ratio." type={"error"}/>
            }
        }
        else {
            return renderGeneratedColors();
        }
    }

    const renderGeneratedColors = () => {
        if(enhanceColors === "foreground"){
            return (
                <ColorSampleCard bgColor={bgColor} fgColor={currentFGColor} cardTitle="Accessible Color Sample" contrastRatio={getContrast(convertHexToRGBArr(currentFGColor), convertHexToRGBArr(bgColor))}>
                    <ColorSlider controlId="a11y-fg-color" label="Pick Foreground Color" colorPallete={colorPallete.foreground} currentColor={currentFGColor} sliderValue={fgSliderValue} handleSliderChange={handleFGSliderChange}/>
                </ColorSampleCard>
            );
        }
        else {
            return (
                <ColorSampleCard bgColor={currentBGColor} fgColor={fgColor} cardTitle="Accessible Color Sample" contrastRatio={getContrast(convertHexToRGBArr(fgColor), convertHexToRGBArr(currentBGColor))}>
                    <ColorSlider controlId="a11y-bg-color" label="Pick Background Color" colorPallete={colorPallete.background} currentColor={currentBGColor} sliderValue={bgSliderValue} handleSliderChange={handleBGSliderChange}/>
                </ColorSampleCard>
            );
        }
        
    }
    
    return (
        <>
            {handleOutputAndRenderResult()}
        </>
    );
}