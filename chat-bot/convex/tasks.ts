import { mutation } from "./_generated/server";
import { v } from "convex/values";

const createTask = mutation({
  args: { text: v.string(), user: v.string() },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert("messages", { 
      message: args.text,
      user: args.user,
    });
  },
});

export { createTask };
