class taskManager {
    tasks: Task[] = [];
}

//interface זה הגדרת ממש נתונים
interface Task {
    id: number;
    title: string;
    description: string;
    addedTime: string;
    priority: number;
    isCompleted: boolean;

}