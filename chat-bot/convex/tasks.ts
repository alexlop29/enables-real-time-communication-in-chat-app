import { mutation } from "./_generated/server";
import { v } from "convex/values";

const createTask = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert("tasks", { text: args.text });
  },
});

export { createTask };
