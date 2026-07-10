// // copycode.js 完整修复版本
// document.addEventListener('DOMContentLoaded', function () {
//   // 1. 选择所有代码块
//   const codeElements = document.querySelectorAll('pre code');

//   codeElements.forEach((codeElement) => {
//     // 2. 创建复制按钮
//     const copyBtn = document.createElement('div');
//     copyBtn.className = 'copy-btn';
//     copyBtn.textContent = 'Copy';

//     // 3. 将按钮添加到代码块中
//     codeElement.appendChild(copyBtn);

//     // 4. 绑定点击事件（使用闭包保留上下文）
//     copyBtn.addEventListener('click', async function () {
//       try {
//         const text = codeElement.innerText;
//         await navigator.clipboard.writeText(text);
//         console.log('复制成功:', text);

//         // 反馈效果（可选）
//         this.textContent = 'Copied!';
//         setTimeout(() => {
//           this.textContent = 'Copy';
//         }, 2000);
//       } catch (err) {
//         console.error('复制失败:', err);
//         this.textContent = 'Error!';
//         setTimeout(() => {
//           this.textContent = 'Copy';
//         }, 2000);
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  // 针对 markdown-it 生成的代码块结构
  document.querySelectorAll('pre code').forEach(codeElement => {
    const btn = document.createElement('div');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    codeElement.parentNode.insertBefore(btn, codeElement); // 插入到 pre 内部

    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codeElement.textContent);
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy', 2000);
      } catch (err) {
        console.error('复制失败:', err);
      }
    });
  });
});
