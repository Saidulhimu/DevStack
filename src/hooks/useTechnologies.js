import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const useTechnologies = () => {
    const [technologies, setTechnologies] = useState([]);
    const [stack, setStack] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/technologies.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setTechnologies(data);
            } catch (error) {
                console.error('Data Fetch Error:', error);
                toast.error('Failed to load technologies.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddToStack = (tech) => {
        const isAlreadyAdded = stack.some((item) => item.id === tech.id);

        if (isAlreadyAdded) {
            toast.warning(`${tech.name} is already in your stack!`, {
                position: 'top-right',
                autoClose: 2500,
            });
            return;
        }

        setStack((prevStack) => [...prevStack, tech]);
        toast.success(`${tech.name} added to stack!`, {
            position: 'top-right',
            autoClose: 2000,
        });
    };

    const handleRemove = (id) => {
        const itemToRemove = stack.find((item) => item.id === id);
        setStack((prevStack) => prevStack.filter((item) => item.id !== id));
        if (itemToRemove) {
            toast.info(`${itemToRemove.name} removed from stack.`, {
                position: 'top-right',
                autoClose: 2000,
            });
        }
    };

    const handleRemoveAll = () => {
        setStack([]);
        toast.info('Cleared all items from stack.', {
            position: 'top-right',
            autoClose: 2000,
        });
    };

    return {
        technologies,
        stack,
        loading,
        handleAddToStack,
        handleRemove,
        handleRemoveAll,
    };
};