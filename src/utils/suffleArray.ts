export  const suffleArray = <T>(array: T[]): T[] => {
    const randomComparator = () => Math.random() - 0.5;

    return array.sort(randomComparator);
};