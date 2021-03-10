import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://github.com/adasantos.png" alt="André Santos" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy higly scalable</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://github.com/adasantos.png" alt="André Santos" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy higly scalable</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://github.com/adasantos.png" alt="André Santos" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy higly scalable</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
