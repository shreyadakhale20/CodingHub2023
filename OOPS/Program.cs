﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassObject
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region==========Object Creation==========
            ///<summary>
            ///Creating an instance of the class Named RollNo_1
            /// </summary>
            StandardFifth RollNo_1 = new StandardFifth(1, "Shreya", "Dakhale", 22, "shreyadakhale200@gmail.com", "9970104869",89,87,65,90,99,"Mahima");
            StandardFifth RollNo_2 = new StandardFifth(2, "Mahima", "Barde", 21, "Mahimagmail.com", "9434282935",99,87,67,99,69,"Mahi");
            Console.ReadKey();
            #endregion


        }
    }
}
