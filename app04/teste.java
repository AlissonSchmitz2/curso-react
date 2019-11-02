public PrincipalForm() {
    setTitle("Compilador LMS v1.0.0-betha");
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setBounds(100, 100, 1920, 1350);
    setExtendedState(MAXIMIZED_BOTH);
    setLocationRelativeTo(null);
    setIconImage(MasterImage.iconePrincipal.getImage());
  
    criarComponentes();
    acoesComponentes();
  }