USE tasks_base;
CREATE TABLE jadval_nomi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_title VARCHAR(50),
    task_description TEXT,
    is_done TEXT
);