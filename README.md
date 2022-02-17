# AppDoencasClinicas

Componentes:

  Imagem => 
  
    Props:
    
      source={require(<Diretório da imagem>)}
      title=<Titulo da imagem dentro do modal>     (string)         default: "Titulo"
      animation=<Tipo de animação>   (stringg)      default: "slide"
      transparent=<Modal transparente?>   (boolean) default: true
    
    Methods:
    
      toggleModal()     =>    altera a visibilidade do modal, default: false
  
  ScreenModalImage =>
  
    Props:
    
      source={require(<Diretório da imagem>)}
      toggleModal=<Função para alterar a visibilidade do modal> (function)
      title=<Titulo da Imagem>  (string)           default: "Titulo"

  Tabela =>

    Props:
    
      tableHead={['Coluna1', 'Coluna2']}
      tableData={[['L1D1', 'L1D2'], ['L2D1', 'L2D2'], ['L3D1', 'L3D2']]}