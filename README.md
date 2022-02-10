# AppDoencasClinicas

Componentes:

  Imagem => 
  
    Props:
    
      source={require(<Diretório da imagem>)}
      title=<Titulo da imagem do modal>     (string)         default: "Titulo"
      animation=<Tipo de animação>   (stringg)      default: "slide"
      transparent=<Modal transparente?>   (boolean) default: true
    
    Methods:
    
      toggleModal()     =>    altera a visibilidade do modal, default: false
  
  ScreenModalImage =>
  
    Props:
    
      source={require(<Diretório da imagem>)}
      toggleModal=<Função para alterar a visibilidade do modal> (function)
      title=<Titulo da Imagem do modal>  (string)           default: "titulo"
