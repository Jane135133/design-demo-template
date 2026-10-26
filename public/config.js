window.DEMO_CONFIG = {
  "brand": {
    "name": "DESIGN",
    "context": "设计探索",
    "logo": ""
  },
  "project": {
    "eyebrow": "INTERACTION DEMO · TEMPLATE",
    "title": [
      "项目名称",
      "交互方案演示"
    ]
  },
  "defaultSelection": {
    "layout": "a",
    "material": "glass",
    "action": "balanced"
  },
  "groups": [
    {
      "id": "layout",
      "title": "布局方案",
      "caption": "局部对比",
      "options": [
        {
          "id": "a",
          "title": "A · 布局方案一",
          "description": "替换为这一版布局的特点"
        },
        {
          "id": "b",
          "title": "B · 布局方案二",
          "description": "替换为另一版布局的特点"
        }
      ]
    },
    {
      "id": "material",
      "title": "UI 样式",
      "caption": "局部对比",
      "options": [
        {
          "id": "glass",
          "title": "样式一",
          "description": "替换为材质或视觉说明"
        },
        {
          "id": "plain",
          "title": "样式二",
          "description": "替换为对比方案说明"
        }
      ]
    },
    {
      "id": "action",
      "title": "行动入口",
      "caption": "局部对比",
      "options": [
        {
          "id": "balanced",
          "title": "等权入口",
          "description": "两个入口相同视觉权重"
        },
        {
          "id": "primary",
          "title": "主入口优先",
          "description": "一个主入口与一个次入口"
        }
      ]
    }
  ],
  "guide": [
    {
      "id": "layout",
      "title": "布局与信息分组",
      "description": "讲清这一组方案解决什么问题，以及两版的主要差异。",
      "demo": "切换布局方案，比较信息顺序与空间安排。"
    },
    {
      "id": "material",
      "title": "视觉与材质",
      "description": "补充配色、背景、投影和可读性方面的设计理由。",
      "demo": "切换 UI 样式，比较展示区的变化。"
    },
    {
      "id": "action",
      "title": "主次关系与操作",
      "description": "说明主操作、次操作和关键交互的取舍。",
      "demo": "切换入口布局，点击示例按钮体验反馈。"
    }
  ]
};
