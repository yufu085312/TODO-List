// DOM操作でボタン要素とタスクを表示させるための要素を取得
// タスクを入力するためのインプットフォーム
const taskValue = document.getElementsByClassName('task_value')[0];
// タスクを登録するためのボタン
const taskSubmit = document.getElementsByClassName('task_submit')[0];
// タスクを表示させるための空のリストをそれぞれ取得
const taskList = document.getElementsByClassName('task_list')[0];

// 追加ボタンを作成
const addTasks = (task) => {
    // 入力したタスクを追加・表示
    // createElementは要素を生成し、appendChildは親要素に対して子要素を追加
    const listItem = document.createElement('li');
    const showItem = taskList.appendChild(listItem);
    showItem.innerHTML = task;
    // タスクに削除ボタンを付与
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    listItem.appendChild(deleteButton);
    // 削除ボタンをクリックし、イベントを発動（タスクが削除）
    // preventDefaultは、デフォルトのイベントを打ち消す役割
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
    });
};

// 削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
    // closestは、自身の要素と親要素の中から一致する要素を返す
    const chosenTask = deleteButton.closest('li');
    // removeChildは、親要素からみた子要素を削除
    taskList.removeChild(chosenTask);
};

// 追加ボタンをクリックし、イベントを発動（タスクが追加）(追加ボタンをクリックしたら、addTasks関数が呼び出される)
taskSubmit.addEventListener('click', evt => {
    evt.preventDefault();
    // taskValue.value = ''は、タスクを入力するためのインプットの中身を空にする役割
    const task = taskValue.value;
    addTasks(task);
    taskValue.value = '';
});