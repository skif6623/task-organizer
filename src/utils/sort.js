export const sortedTasks = (tasks, type) => {
  const copyTasks = [...tasks];
  if (type === 'down') {
    return copyTasks.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
  }
  if (type === 'up') {
    return copyTasks.sort(
      (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
    );
  }
};
