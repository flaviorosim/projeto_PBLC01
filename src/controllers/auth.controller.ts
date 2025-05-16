import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import { authRepository } from '../repositories/auth.repository';



export const loginController = async (req: Request, res: Response) : Promise<void> => {
    const { email, senha } = req.body;

    const user = await authRepository.findByEmail(email);
    if (!user) {
      res.status(401).json({ message: 'usuário inválido' });
      return;
    }

    const isPasswordValid = await argon2.verify(user.senha, senha);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'senha inválida' });
      return;
    }

    const token = jwt.sign(
        {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '1h' }
    );

    res.json({ message: 'Login realizado com sucesso', token });
};

  

