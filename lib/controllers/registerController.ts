// @/lib/controllers/loginController.ts
import { authAPI } from "@/lib/apiServices";
import { toast } from "sonner";

export const registerController = {
    executeClick: async ({ paramKey,
        eventCode,
        method,
        formData }: any) => {
        console.log(eventCode);
        if (eventCode === 'ON_REGISTER_SUBMIT') {
            try {
                const res = await authAPI.register(formData, method.path);
                toast.success("Welcome Aboard.");

                // Roles check karke redirect
                if (res.roles.includes('ADMIN')) {
                    window.location.href = '/register';
                } else {
                    window.location.href = method.successRedirect;
                }
            } catch (err: any) {
                toast.error(err.message);
            }
        }
    }
};