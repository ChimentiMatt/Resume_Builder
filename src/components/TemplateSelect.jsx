import '../styles/templateSelect.css'
import TemplateOneImage from '../images/tempOne.PNG'
import TemplateTwoImage from '../images/tempTwo.PNG'

const TemplateSelect = ({setTemplate}) => {
  const makeImageBigger = (id) => {
    document.querySelector(`#${id}`).style.display = 'block'
    document.querySelector(`#${id}`).style.position = 'absolute'
    document.querySelector(`#${id}`).style.zIndex = "12"
    // document.querySelector(`#screen-dim`).style.display = 'block'
  }

  const restoreImage = (id) => {
    document.querySelector(`#${id}`).style.display = 'none'
    document.querySelector(`#${id}`).style.zIndex = "1"
    // document.querySelector(`#screen-dim`).style.display = 'none'
  }

  return (
    <div id='template-select'>
      <div>
        <p>Select a template.</p>
        <p>(or switch without losing progress)</p>
      </div>

        <img onClick={() => setTemplate(1)} onMouseEnter={() => makeImageBigger('template-1-large')} onMouseLeave={() => restoreImage('template-1-large')} id='template-img-1' className='template-img' src={TemplateOneImage} alt='resume template 1'/>
  
      
        <img onClick={() => setTemplate(2)} onMouseEnter={() => makeImageBigger('template-2-large')} onMouseLeave={() => restoreImage('template-2-large')} id='template-img-2' className='template-img' src={TemplateTwoImage} alt='resume template 2'/>

      
        {/* <img onClick={() => setTemplate(3)} onMouseEnter={() => makeImageBigger('template-3-large')} onMouseLeave={() => restoreImage('template-3-large')} id='template-img-3' className='template-img' src={TemplateOneImage} alt='resume template 3'/> */}

        <div id='show-template'>
          <img id='template-1-large' className='template-large-img' src={TemplateOneImage} alt='resume template 1 large'/>
          <img id='template-2-large' className='template-large-img' src={TemplateTwoImage} alt='resume template 2 large'/>
          {/* <img id='template-3-large' className='template-large-img' src={TemplateOneImage} alt='resume template 3 large'/> */}
        </div>

        {/* <div id='screen-dim'></div> */}

        <br/><br/>
    </div>
  )
}

export default TemplateSelect