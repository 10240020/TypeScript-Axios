export default class {
    constructor(){
        const elementView = document.querySelectorAll('');
        this.scrollListener(elementView)
    }
    // Scroll Function
    scrollListener = (elementView:any) =>{
        // Calculate
        const Calculate = async (el,percentageScroll = 100) =>{
            const elementTop = el.getBoundingClientRect().top;
            return await (elementTop <= (window.innerHeight || document.documentElement.clientHeight) - percentageScroll / 100)
        }
        // AddClassName
        const displayScroll = Element =>{
            Element.classList.add('')
        }
        // RemoveClassName
        const hideScrollElement = Element =>{
            Element.classList.remove('')
        }
        // GetAllAttributes
        const handleScrollAnimation = () =>{
            elementView.forEach(element => {
                if(Calculate(element,100))
                    displayScroll(element)
                else hideScrollElement(element)
            });
        }
        handleScrollAnimation()
    }
}