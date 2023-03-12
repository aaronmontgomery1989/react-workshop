import * as yup from 'yup';

export const formSchema = yup.object({
    task: yup
        .string()
        .required("Task is required")
        .max(50, "Max of 15 characters"),
        dueDate: yup.date().required("Due date is required").test({
            test(value, ctx) {
                if (value <= new Date(new Date().setDate(new Date().getDate() - 1))) {
                    return ctx.createError({
                        message: "Yesterday is gone, bro!"
                    });
                }

                return true;
            }
        }),
        priorityLevel: yup.number().required("Number is required").min(1).max(3),
});

export type SchemaProps = yup.InferType<typeof formSchema>;
