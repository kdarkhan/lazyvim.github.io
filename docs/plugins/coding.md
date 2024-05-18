# Coding

<!-- plugins:start -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)

 auto completion


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  vim.api.nvim_set_hl(0, "CmpGhostText", { link = "Comment", default = true })
  local cmp = require("cmp")
  local defaults = require("cmp.config.default")()
  return {
    auto_brackets = {}, -- configure any filetype to auto add brackets
    completion = {
      completeopt = "menu,menuone,noinsert",
    },
    mapping = cmp.mapping.preset.insert({
      ["<C-n>"] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),
      ["<C-p>"] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Insert }),
      ["<C-b>"] = cmp.mapping.scroll_docs(-4),
      ["<C-f>"] = cmp.mapping.scroll_docs(4),
      ["<C-Space>"] = cmp.mapping.complete(),
      ["<C-e>"] = cmp.mapping.abort(),
      ["<CR>"] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.
      ["<S-CR>"] = cmp.mapping.confirm({
        behavior = cmp.ConfirmBehavior.Replace,
        select = true,
      }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.
      ["<C-CR>"] = function(fallback)
        cmp.abort()
        fallback()
      end,
    }),
    sources = cmp.config.sources({
      { name = "nvim_lsp" },
      { name = "path" },
    }, {
      { name = "buffer" },
    }),
    formatting = {
      format = function(_, item)
        local icons = require("lazyvim.config").icons.kinds
        if icons[item.kind] then
          item.kind = icons[item.kind] .. item.kind
        end
        return item
      end,
    },
    experimental = {
      ghost_text = {
        hl_group = "CmpGhostText",
      },
    },
    sorting = defaults.sorting,
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  version = false, -- last release is way too old
  event = "InsertEnter",
  dependencies = {
    "hrsh7th/cmp-nvim-lsp",
    "hrsh7th/cmp-buffer",
    "hrsh7th/cmp-path",
  },
  -- Not all LSP servers add brackets when completing a function.
  -- To better deal with this, LazyVim adds a custom option to cmp,
  -- that you can configure. For example:
  --
  -- ```lua
  -- opts = {
  --   auto_brackets = { "python" }
  -- }
  -- ```

  opts = function()
    vim.api.nvim_set_hl(0, "CmpGhostText", { link = "Comment", default = true })
    local cmp = require("cmp")
    local defaults = require("cmp.config.default")()
    return {
      auto_brackets = {}, -- configure any filetype to auto add brackets
      completion = {
        completeopt = "menu,menuone,noinsert",
      },
      mapping = cmp.mapping.preset.insert({
        ["<C-n>"] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),
        ["<C-p>"] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Insert }),
        ["<C-b>"] = cmp.mapping.scroll_docs(-4),
        ["<C-f>"] = cmp.mapping.scroll_docs(4),
        ["<C-Space>"] = cmp.mapping.complete(),
        ["<C-e>"] = cmp.mapping.abort(),
        ["<CR>"] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.
        ["<S-CR>"] = cmp.mapping.confirm({
          behavior = cmp.ConfirmBehavior.Replace,
          select = true,
        }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.
        ["<C-CR>"] = function(fallback)
          cmp.abort()
          fallback()
        end,
      }),
      sources = cmp.config.sources({
        { name = "nvim_lsp" },
        { name = "path" },
      }, {
        { name = "buffer" },
      }),
      formatting = {
        format = function(_, item)
          local icons = require("lazyvim.config").icons.kinds
          if icons[item.kind] then
            item.kind = icons[item.kind] .. item.kind
          end
          return item
        end,
      },
      experimental = {
        ghost_text = {
          hl_group = "CmpGhostText",
        },
      },
      sorting = defaults.sorting,
    }
  end,
  ---@param opts cmp.ConfigSchema | {auto_brackets?: string[]}
  config = function(_, opts)
    for _, source in ipairs(opts.sources) do
      source.group_index = source.group_index or 1
    end
    local cmp = require("cmp")
    local Kind = cmp.lsp.CompletionItemKind
    cmp.setup(opts)
    cmp.event:on("confirm_done", function(event)
      if not vim.tbl_contains(opts.auto_brackets or {}, vim.bo.filetype) then
        return
      end
      local entry = event.entry
      local item = entry:get_completion_item()
      if vim.tbl_contains({ Kind.Function, Kind.Method }, item.kind) and item.insertTextFormat ~= 2 then
        local cursor = vim.api.nvim_win_get_cursor(0)
        local prev_char = vim.api.nvim_buf_get_text(0, cursor[1] - 1, cursor[2], cursor[1] - 1, cursor[2] + 1, {})[1]
        if prev_char ~= "(" and prev_char ~= ")" then
          local keys = vim.api.nvim_replace_termcodes("()<left>", false, false, true)
          vim.api.nvim_feedkeys(keys, "i", true)
        end
      end
    end)
  end,
}
```

</TabItem>

</Tabs>

## [cmp-nvim-lsp](https://github.com/hrsh7th/cmp-nvim-lsp)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/cmp-nvim-lsp",
  "hrsh7th/cmp-buffer",
  "hrsh7th/cmp-path",
}
```

</TabItem>

</Tabs>

## [cmp-buffer](https://github.com/hrsh7th/cmp-buffer)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
"hrsh7th/cmp-buffer"
```

</TabItem>

</Tabs>

## [cmp-path](https://github.com/hrsh7th/cmp-path)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
"hrsh7th/cmp-path"
```

</TabItem>

</Tabs>

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.snippet = {
    expand = function(args)
      vim.snippet.expand(args.body)
    end,
  }
  table.insert(opts.sources, { name = "snippets" })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-cmp",
  dependencies = {
    { "rafamadriz/friendly-snippets" },
    { "garymjr/nvim-snippets", opts = { friendly_snippets = true } },
  },
  opts = function(_, opts)
    opts.snippet = {
      expand = function(args)
        vim.snippet.expand(args.body)
      end,
    }
    table.insert(opts.sources, { name = "snippets" })
  end,
  keys = {
    {
      "<Tab>",
      function()
        if vim.snippet.active({ direction = 1 }) then
          vim.schedule(function()
            vim.snippet.jump(1)
          end)
          return
        end
        return "<Tab>"
      end,
      expr = true,
      silent = true,
      mode = "i",
    },
    {
      "<Tab>",
      function()
        vim.schedule(function()
          vim.snippet.jump(1)
        end)
      end,
      silent = true,
      mode = "s",
    },
    {
      "<S-Tab>",
      function()
        if vim.snippet.active({ direction = -1 }) then
          vim.schedule(function()
            vim.snippet.jump(-1)
          end)
          return
        end
        return "<S-Tab>"
      end,
      expr = true,
      silent = true,
      mode = { "i", "s" },
    },
  },
}
```

</TabItem>

</Tabs>

## [friendly-snippets](https://github.com/rafamadriz/friendly-snippets)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "rafamadriz/friendly-snippets" }
```

</TabItem>

</Tabs>

## [nvim-snippets](https://github.com/garymjr/nvim-snippets)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { friendly_snippets = true }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "garymjr/nvim-snippets", opts = { friendly_snippets = true } }
```

</TabItem>

</Tabs>

## [mini.pairs](https://github.com/echasnovski/mini.pairs)

 auto pairs


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  mappings = {
    ["`"] = { action = "closeopen", pair = "``", neigh_pattern = "[^\\`].", register = { cr = false } },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.pairs",
  event = "VeryLazy",
  opts = {
    mappings = {
      ["`"] = { action = "closeopen", pair = "``", neigh_pattern = "[^\\`].", register = { cr = false } },
    },
  },
  keys = {
    {
      "<leader>up",
      function()
        vim.g.minipairs_disable = not vim.g.minipairs_disable
        if vim.g.minipairs_disable then
          LazyVim.warn("Disabled auto pairs", { title = "Option" })
        else
          LazyVim.info("Enabled auto pairs", { title = "Option" })
        end
      end,
      desc = "Toggle Auto Pairs",
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-ts-context-commentstring](https://github.com/JoosepAlviste/nvim-ts-context-commentstring)

 comments


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  enable_autocmd = false,
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "JoosepAlviste/nvim-ts-context-commentstring",
  lazy = true,
  opts = {
    enable_autocmd = false,
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->