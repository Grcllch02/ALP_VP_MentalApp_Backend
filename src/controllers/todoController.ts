import { Request, Response } from 'express';

interface Todo {
    id: number;
    title: string;
    description: string | null;
    is_completed: boolean;
    created_at: string;
}

let todos: Todo[] = [
    {
        id: 1,
        title: "Contoh Tugas",
        description: "Ini data dummy dari backend",
        is_completed: false,
        created_at: new Date().toISOString()
    }
];

export const getAllTodos = (req: Request, res: Response) => {
    res.status(200).json(todos);
};

export const createTodo = (req: Request, res: Response) => {
    const { title, description } = req.body;
    
    const newTodo: Todo = {
        id: Date.now(), 
        title: title,
        description: description || null,
        is_completed: false,
        created_at: new Date().toISOString()
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, is_completed } = req.body;
    const todoId = parseInt(id);

    const todoIndex = todos.findIndex(t => t.id === todoId);

    if (todoIndex > -1) {
        todos[todoIndex] = {
            ...todos[todoIndex],
            title: title !== undefined ? title : todos[todoIndex].title,
            description: description !== undefined ? description : todos[todoIndex].description,
            is_completed: is_completed !== undefined ? is_completed : todos[todoIndex].is_completed
        };
        res.status(200).json(todos[todoIndex]);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
};

export const deleteTodo = (req: Request, res: Response) => {
    const { id } = req.params;
    const todoId = parseInt(id);
    const initialLength = todos.length;
    
    todos = todos.filter(t => t.id !== todoId);

    if (todos.length < initialLength) {
        res.status(200).json({ message: "Deleted successfully" });
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
};