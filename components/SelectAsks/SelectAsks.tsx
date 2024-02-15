import { ExpandLessOutlined, ExpandMoreOutlined } from "@mui/icons-material";
import { Button, Collapse } from "@mui/material";
import { useState } from "react";
import { StyledButton, DivSelect, DivSub } from "./style";

const Select = () => {
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [isCollapsed2, setIsCollapsed2] = useState(false);

  const handleToggleCollapse1 = () => {
    setIsCollapsed1((prev) => !prev);
    setIsCollapsed2(false);
  };

  const handleToggleCollapse2 = () => {
    setIsCollapsed2((prev) => !prev);
    setIsCollapsed1(false);
  };

  return (
    <DivSelect>
      <StyledButton
        variant="outlined"
        onClick={handleToggleCollapse1}
        endIcon={isCollapsed1 ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
      >
        <p>Benefícios Âncora De Carreiras </p>
      </StyledButton>
      <Collapse in={isCollapsed1}>
        <DivSub>
          {" "}
          <p>
            As <b style={{ fontStyle: "italic" }}>Âncoras de Carreira</b>{" "}
            beneficiam ao orientar as escolhas profissionais.Elas representam as
            motivações por trás das decisões, influenciando escolhas de
            carreira, mudanças de emprego e busca por oportunidades.
          </p>
        </DivSub>
      </Collapse>
      <StyledButton
        variant="outlined"
        onClick={handleToggleCollapse2}
        endIcon={isCollapsed2 ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
      >
        <p>Benefícios Forma Mentis</p>
      </StyledButton>
      <Collapse in={isCollapsed2}>
        <DivSub>
          {" "}
          <p>
            O Teste <b style={{ fontStyle: "italic" }}>Forma Mentis</b>{" "}
            beneficia ao avaliar a mentalidade empreendedora dos indivíduos,
            analisando responsabilidade, autonomia, vontade, iniciativa e
            resolução de problemas, além da relação em equipe. Sendo valiosa
            para orientar escolhas e contribuir para o desenvolvimento de
            profissionais conscientes e bem-sucedidos.
          </p>
        </DivSub>
      </Collapse>
    </DivSelect>
  );
};
export default Select;
