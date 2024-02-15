import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("messages").take(10);
  },
});

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
