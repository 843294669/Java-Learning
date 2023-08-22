package basic.thread;

import java.util.concurrent.*;

public class CompletionService {

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        // 创建线程池
        ExecutorService executor = Executors.newFixedThreadPool(5);

        // 创建CompletionService
        java.util.concurrent.CompletionService<Integer> completionService = new ExecutorCompletionService<>(executor);

        // 提交任务
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;

            // 使用Lambda表达式创建Runnable任务
            completionService.submit(() -> {
                // 模拟任务执行
                //Thread.sleep(taskId * 1000);
                return taskId;
            });
        }

        // 获取已完成的任务结果
        for (int i = 0; i < 5; i++) {
            Future<Integer> completedTask = completionService.take();
            int result = completedTask.get();
            System.out.println("Task " + result + " completed");
        }

        // 关闭线程池
        executor.shutdown();

    }
}
