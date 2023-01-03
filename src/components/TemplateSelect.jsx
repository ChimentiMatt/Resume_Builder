import '../styles/templateSelect.css'

const TemplateSelect = ({setTemplate}) => {
  return (
    <div id='template-select-page'>
        <h1>Select a template</h1>

        <div onClick={() => setTemplate(1)}>1</div>
        
        <div onClick={() => setTemplate(2)}>2</div>
        
        <div onClick={() => setTemplate(3)}>3</div>
    </div>
  )
}

export default TemplateSelect